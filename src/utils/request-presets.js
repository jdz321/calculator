
/* eslint no-undef: 0 */
import { notification } from 'antd'
import qs from 'qs'
import { env } from '@alife/scu-utils/lib/tools'
import { buildinPresets } from '@alife/scu-utils/lib/request'

const { parseJSON, getResult, successJudge } = buildinPresets

function devCookieReslover(url) {
  const query = qs.parse(location.search ? location.search.slice(1) : '')
  if (query.cookieFlag && query.cookieFlag > 2) {
    notification.error({ message: '同步cookie失败' })
    throw { msg: '同步cookie失败' }  // eslint-disable-line
  }
  query.cookieFlag = query.cookieFlag ? query.cookieFlag + 1 : 1
  const iframe = document.createElement('iframe')
  iframe.src = url
  iframe.onload = () => { location.search = qs.stringify(query) }
  document.body.append(iframe)
  notification.info({ message: '正在同步cookie...' })
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  if (env.isDev && response.type === 'opaqueredirect') {
    return devCookieReslover(response.url)
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export const presetsWithResultGetter = [checkStatus, parseJSON, getResult]
export const presetsWithSuccessJudge = [checkStatus, parseJSON, successJudge]

export default [checkStatus, parseJSON]
