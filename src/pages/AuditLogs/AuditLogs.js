import React from 'react'
import "./AuditLogs.scss"

//components
import TopNav from '../../components/TopNav/TopNav'
import LogNav from '../../components/LogNav/LogNav'
import Support from '../../components/Support/Support'
import ApiLogs from '../../components/ApiLogs/ApiLogs'

const AuditLogs = () => {
  return (
    <div className="auditlogs">
        <TopNav />
        <LogNav />
        <ApiLogs />
        <Support />
    </div>
  )
}

export default AuditLogs