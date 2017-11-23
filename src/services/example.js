/* eslint import/prefer-default-export: 0 */
import { postApi, getApi } from '@alife/scu-utils/lib/request'
import { presetsWithResultGetter } from '@utils/request-presets'

export function getItems(params) {
  return getApi({
    url: '/icenter/itemlist/ajx/itemList.htm',
    mock: 'http://dip.alibaba-inc.com/api/v2/services/schema/mock/60660',
  }, params, presetsWithResultGetter, { timeout: 100, isMock: true })
}
