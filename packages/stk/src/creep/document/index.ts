import { captureError } from '../errors'
import { createTimer, hashSlice, logTestResult, performanceLogger } from '../utils/helpers'
import { count, modal, HTMLNote } from '../utils/html'

export default function getHTMLElementVersion() {
	try {
		const timer = createTimer()
		timer.start()
		const keys = []
		// eslint-disable-next-line guard-for-in
		for (const key in document.documentElement) {
			keys.push(key)
		}
		logTestResult({ time: timer.stop(), test: 'html element', passed: true })
		return { keys }
	} catch (error) {
		logTestResult({ test: 'html element', passed: false })
		captureError(error)
		return
	}
}

export function htmlElementVersionHTML(fp) {
	if (!fp.htmlElementVersion) {
		return `
		<div class="col-six undefined">
			<strong>HTMLElement</strong>
			<div>keys (0): ${HTMLNote.BLOCKED}</div>
			<div>
				<div>${HTMLNote.BLOCKED}</div>
			</div>
		</div>`
	}
	const {
		htmlElementVersion: { $hash, keys }
	} = fp

	return `
	<div class="relative col-six">
		<span class="aside-note">${performanceLogger.getLog()['html element']}</span>
		<strong>HTMLElement</strong><span class="hash">${hashSlice($hash)}</span>
		<div>keys (${count(keys)}): ${
			keys && keys.length ? modal('creep-html-element-version', keys.join(', ')) : HTMLNote.BLOCKED
		}</div>
		<div class="blurred" id="html-element-samples">
			<div>0% of engine</div>
		</div>
	</div>
	`
}
