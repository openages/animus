import Calendar from 'antd/es/calendar/locale/ja_JP'
import DatePicker from 'antd/es/date-picker/locale/ja_JP'
import TimePicker from 'antd/es/time-picker/locale/ja_JP'

const typeTemplate = '${label}は有効な${type}ではありません'

const localeValues = {
	locale: 'ja',
	Pagination: {
		// Options
		items_per_page: '件 / ページ',
		jump_to: '移動',
		jump_to_confirm: '確認する',
		page: 'ページ',
		// Pagination
		prev_page: '前のページ',
		next_page: '次のページ',
		prev_5: '前 5ページ',
		next_5: '次 5ページ',
		prev_3: '前 3ページ',
		next_3: '次 3ページ',
		page_size: 'ページサイズ'
	},
	DatePicker,
	TimePicker,
	Calendar,
	global: {
		placeholder: '選んでください'
	},
	Table: {
		filterTitle: 'フィルター',
		filterConfirm: 'OK',
		filterReset: 'リセット',
		filterEmptyText: 'フィルターなし',
		filterCheckall: 'すべてを選択',
		filterSearchPlaceholder: 'フィルターで検索',
		emptyText: 'データなし',
		selectAll: 'ページ単位で選択',
		selectInvert: 'ページ単位で反転',
		selectNone: 'クリア',
		selectionAll: 'すべてを選択',
		sortTitle: 'ソート',
		expand: '展開する',
		collapse: '折り畳む',
		triggerDesc: 'クリックで降順にソート',
		triggerAsc: 'クリックで昇順にソート',
		cancelSort: 'ソートをキャンセル'
	},
	Tour: {
		Next: '次',
		Previous: '前の',
		Finish: '仕上げる'
	},
	Modal: {
		okText: 'OK',
		cancelText: 'キャンセル',
		justOkText: 'OK'
	},
	Popconfirm: {
		okText: 'OK',
		cancelText: 'キャンセル'
	},
	Transfer: {
		titles: ['', ''],
		searchPlaceholder: 'ここを検索',
		itemUnit: 'アイテム',
		itemsUnit: 'アイテム',
		remove: '削除',
		selectCurrent: '現在のページを選択',
		removeCurrent: '現在のページを削除',
		selectAll: 'ページ単位で選択',
		deselectAll: 'すべてのデータの選択を解除する',
		removeAll: 'ページ単位で削除',
		selectInvert: 'ページ単位で反転'
	},
	Upload: {
		uploading: 'アップロード中...',
		removeFile: 'ファイルを削除',
		uploadError: 'アップロードエラー',
		previewFile: 'ファイルをプレビュー',
		downloadFile: 'ダウンロードファイル'
	},
	Empty: {
		description: 'データがありません'
	},
	Icon: {
		icon: 'アイコン'
	},
	Text: {
		edit: '編集',
		copy: 'コピー',
		copied: 'コピーされました',
		expand: '拡大する',
		collapse: '崩壊'
	},
	Form: {
		optional: '(オプション)',
		defaultValidateMessages: {
			default: '${label}のフィールド検証エラー',
			required: '${label}を入力してください',
			enum: '${label}は[${enum}]のいずれかである必要があります',
			whitespace: '${label}は空白文字にすることはできません',
			date: {
				format: '${label}の日付形式は不正です',
				parse: '${label}は日付に変換できません',
				invalid: '${label}は不正な日付です'
			},
			types: {
				string: typeTemplate,
				method: typeTemplate,
				array: typeTemplate,
				object: typeTemplate,
				number: typeTemplate,
				date: typeTemplate,
				boolean: typeTemplate,
				integer: typeTemplate,
				float: typeTemplate,
				regexp: typeTemplate,
				email: typeTemplate,
				url: typeTemplate,
				hex: typeTemplate
			},
			string: {
				len: '${label}は${len}文字である必要があります',
				min: '${label}は${min}文字以上である必要があります',
				max: '${label}は${max}文字以下である必要があります',
				range: '${label}は${min}-${max}文字の範囲である必要があります'
			},
			number: {
				len: '${label}は${len}と等しい必要があります',
				min: '${label}の最小値は${min}です',
				max: '${label}の最大値は${max}です',
				range: '${label}は${min}-${max}の範囲である必要があります'
			},
			array: {
				len: '${label}は${len}である必要があります',
				min: '${label}の最小は${min}です',
				max: '${label}の最大は${max}です',
				range: '${label}の合計は${min}-${max}の範囲である必要があります'
			},
			pattern: {
				mismatch: '${label}はパターン${pattern}と一致しません'
			}
		}
	},
	Image: {
		preview: 'プレビュー'
	},
	QRCode: {
		expired: 'QRコードの有効期限が切れました',
		refresh: 'リフレッシュ',
		scanned: 'スキャン済み'
	},
	ColorPicker: {
		presetEmpty: '空の',
		transparent: '透明',
		singleColor: '単色',
		gradientColor: 'グラデーション'
	}
}

export default localeValues
