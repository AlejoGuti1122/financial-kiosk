import React from "react"
import Navbar from "../../../common/components/Navbar/Navbar"
import CredicreaTwo from "../../../common/components/CredicreaTwo/CredicreaTwo"
import TextCredit from "../../../common/components/TextCredit/TextCredit"
import SpecialQuota from "../../../common/components/SpecialQuota/SpecialQuota"
import YourProjects from "../../../common/components/YourProjects/YourProjects"

const Layout = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div>
        <CredicreaTwo/>
      </div>
      <div className="flex justify-center">
        <TextCredit/>
      </div>
      <div className="">
        <SpecialQuota/>
      </div>
      <div>
        <YourProjects/>
      </div>
    </div>
  )
}

export default Layout
