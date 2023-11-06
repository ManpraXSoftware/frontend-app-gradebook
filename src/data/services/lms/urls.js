import { getConfig } from '@edx/frontend-platform';
import { StrictDict } from 'utils';
import { historyRecordLimit } from './constants';
import { filterQuery, stringifyUrl } from './utils';

const courseId = window.location.pathname.split('/').filter(Boolean).pop() || '';

export const lmsURL_91lms =  () => `${getConfig().LMS_BASE_URL}`;
export const getUrlPrefix = () => `${getConfig().LMS_BASE_URL}/api/`;
export const getBulkGradesUrl = () => `${getUrlPrefix()}bulk_grades/course/${courseId}/`;
export const getEnrollmentUrl = () => `${getUrlPrefix()}enrollment/v1/`;
/**
 need to change the getGradesUrl here to get the data 
 from 91lms API's instead the one from edx-platform (api/v1/grades/)
 */


export const getGradesUrl = () => `${lmsURL_91lms()}/mxadmin/`;
export const getGradebookUrl = () => `${getGradesUrl()}gradebook/${courseId}/`;
export const getBulkUpdateUrl = () => `${getGradebookUrl()}bulk-update`;
export const getInterventionUrl = () => `${getBulkGradesUrl()}intervention/`;
export const getCohortsUrl = () => `${getUrlPrefix()}courses/${courseId}/cohorts/`;
export const getTracksUrl = () => `${getEnrollmentUrl()}course/${courseId}?include_expired=1`;
export const getBulkHistoryUrl = () => `${getBulkUpdateUrl()}history/`;
export const getAssignmentTypesUrl = () => stringifyUrl(`${getGradebookUrl()}grading-info`, { graded_only: true });
export const getRolesUrl = () => stringifyUrl(`${getEnrollmentUrl()}roles/`, { courseId });
/**
 * bulkGradesUrlByCourseAndRow(courseId, rowId)
 * returns the bulkGrades url with the given rowId.
 * @param {string} rowId - row/error identifier
 * @return {string} - bulk grades fetch url
 */

export const bulkGradesUrlByRow = (rowId) => stringifyUrl(getBulkGradesUrl(), { error_id: rowId });

export const gradeCsvUrl = (options = {}) => stringifyUrl(getBulkGradesUrl(), filterQuery(options));

export const interventionExportCsvUrl = (options = {}) => (
  stringifyUrl(getInterventionUrl(), filterQuery(options))
);

export const sectionOverrideHistoryUrl = (subsectionId, userId) => stringifyUrl(
  `${getGradesUrl()}subsection/${subsectionId}/`,
  { user_id: userId, history_record_limit: historyRecordLimit },
);

export default StrictDict({
  getUrlPrefix,
  lmsURL_91lms,
  getBulkGradesUrl,
  getEnrollmentUrl,
  getGradesUrl,
  getGradebookUrl,
  getBulkUpdateUrl,
  getInterventionUrl,
  getCohortsUrl,
  getTracksUrl,
  getBulkHistoryUrl,
  getAssignmentTypesUrl,
  getRolesUrl,
  bulkGradesUrlByRow,
  gradeCsvUrl,
  interventionExportCsvUrl,
  sectionOverrideHistoryUrl,
});
