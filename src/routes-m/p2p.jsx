import React from 'react'
import { connect } from 'dva'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
import styles from './p2p.less'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <WingBlank>
        <Button>default</Button><WhiteSpace />
      </WingBlank>
    </div>
  )
}

IndexPage.propTypes = {
}

export default connect()(IndexPage)
