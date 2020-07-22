import { InjectionToken } from '@angular/core';
import { CopyleaksReportConfig, CopyleaksReportOptions } from '../models';
import { CopyleaksTextConfig } from '../models/CopyleaksTextConfig';

/** Constants related to `report.service.ts` */
export const REPORT_SERVICE_CONSTANTS = {
	RESULTS_SETTINGS_KEY: 'copyleaks-results-settings',
	BTN_THROTTLE_MS: 250,
};

/** A default result options of the report */
export const DEFAULT_OPTIONS: CopyleaksReportOptions = {
	showPageSources: false,
	showOnlyTopResults: true,
	showRelated: true,
	showIdentical: true,
	showMinorChanges: true,
	setAsDefault: false,
};
/** The default config of the report component. */
export const DEFAULT_REPORT_CONFIG: CopyleaksReportConfig = {
	contentMode: 'html',
	download: false,
	help: false,
	disableSuspectBackButton: false,
	options: { ...DEFAULT_OPTIONS },
	scanId: null,
	share: false,
	sourcePage: 1,
	suspectId: null,
	suspectPage: 1,
	viewMode: 'one-to-many',
};
/**
 * Default text messages for the report
 */
export const DEFAULT_TEXT_CONFIG: CopyleaksTextConfig = {
	RESULT_PUSH_ERROR: 'Unable to retrieve result content at this time. Please try again later.',
	IDENTICAL_TOOLTIP_TEXT: 'Identical matches are one to one exact wording in the text. Click to disable',
	MINOR_CHANGES_TOOLTIP_TEXT: 'Nearly identical with different form, ie "slow" becomes "slowly". Click to disable',
	RELATED_MEANING_TOOLTIP_TEXT: 'Close meaning but different words used to convey the message. Click to disable',
	OMITTED_WORDS_TOOLTIP_TEXT: 'Words that have been hidden.',
	MATCH_TYPE_OMITTED_TOOLTIP_TEXT: 'Omitted by your configuration. Click to enable',
};
/** Font size unit for increasing/decreasing font size while in `text` content mode */
export const TEXT_FONT_SIZE_UNIT = 0.25;

/** Max font size zoom level */
export const MAX_TEXT_ZOOM = 4;

/** Min font size zoom level */
export const MIN_TEXT_ZOOM = 0.5;

/** User messages for text exclusion cases */
export const EXCLUDE_MESSAGE = {
	1: 'Quotations are omitted according to your settings',
	2: 'References are omitted according to your settings',
	5: 'HTML templates are omitted according to your settings',
	6: 'Tables of content are omitted according to your settings',
	7: 'Source code comments are omitted according to your settings',
	0: 'Sensitive data are hidden according to your settings',
};

/** Injection token used to override the default config of the report */
export const COPYLEAKS_CONFIG_INJECTION_TOKEN = new InjectionToken<CopyleaksReportConfig>('copyleaks-config');

/** Injection token used to override the default text messages of the report */
export const COPYLEAKS_TEXT_CONFIG_INJECTION_TOKEN = new InjectionToken<CopyleaksTextConfig>('copyleaks-text-config');

/** The current Copyleaks API version that this library supports */
export const CURRENT_API_VERSION = 3;

/** Message used for `CompleteResult` object validation error */
export const COMPLETE_RESULT_VALIDATION_ERROR =
	'Wrong argument supplied. Should be a CompleteResult.\n' +
	'See https://api.copyleaks.com/documentation/v3/webhooks/completed';

/** Message used for `NewResult` object validation error */
export const NEW_RESULT_VALIDATION_ERROR =
	'Wrong argument supplied. Should be a NewResult.\n' +
	'See https://api.copyleaks.com/documentation/v3/webhooks/new-result';

/** Message used for `ScanResult` object validation error */
export const SCAN_RESULT_VALIDATION_ERROR =
	'Wrong argument supplied. Should be a ScanResult.\n' +
	'See https://api.copyleaks.com/documentation/v3/downloads/result';

/** Message used for `ScanSource` object validation error */
export const SCAN_SOURCE_VALIDATION_ERROR =
	'Wrong argument supplied. Should be a ScanSource.\n' +
	'See https://api.copyleaks.com/documentation/v3/downloads/source';

/** Message used for `version` number validation error */
export const VERSION_VALIDATION_ERROR =
	'argument was generated by an outdated version of the API.\n' +
	`please provide an argument generated by API version: ${CURRENT_API_VERSION}\n` +
	`See https://api.copyleaks.com/documentation/v${CURRENT_API_VERSION}`;
