import React from 'react'

import {
  deleteSingleUser,
  getAllUser,
  getSingleUser,
} from '../../api/SuperAdminAPI.js'

const SuperAdminView = () => {
  const [userData, setuserData] = React.useState()
  const [popUpModal, setPopUp] = React.useState(null)
  const [singleUser, setSingleUser] = React.useState()

  const fetchingData = async () => {
    try {
      const data = await getAllUser()

      setuserData(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  // clicking take action button
  const handleClick = async (e) => {
    if (popUpModal === 'is-active') {
      setPopUp(null)
    } else {
      const singleUserData = await getSingleUser(e.target.name)
      setSingleUser(singleUserData.data)
      setPopUp('is-active')
    }
  }

  // clicking the blocking button
  const handleBlock = async () => {
    await deleteSingleUser(singleUser._id)
    setPopUp(null)
  }
  React.useEffect(() => {
    fetchingData()
  }, [popUpModal])

  return (
    <>
      <div className="section">
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>
                <p className="has-text-centered">Username</p>
              </th>
              <th>
                <p className="has-text-centered">Role</p>
              </th>
              <th>
                <p className="has-text-centered">Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {userData
              ? userData.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td>
                        <p className="has-text-centered">{user.username}</p>
                      </td>
                      <td>
                        <p className="has-text-centered"> {user.role}</p>
                      </td>
                      <td>
                        <button
                          className="button is-fullwidth"
                          onClick={handleClick}
                          name={user._id}
                        >
                          Take Action
                        </button>
                      </td>
                    </tr>
                  )
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className={`modal ${popUpModal}`}>
        <div className="modal-background" onClick={handleClick}></div>
        <div className="modal-content">
          <section className="modal-card-body">
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>
                    <p className="has-text-centered">Username</p>
                  </th>
                  <th>
                    <p className="has-text-centered">Email</p>
                  </th>
                  <th>
                    <p className="has-text-centered">Role</p>
                  </th>
                  <th>
                    <p className="has-text-centered">ID</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {singleUser ? (
                  <tr>
                    <td>
                      <p className="has-text-centered">{singleUser.username}</p>
                    </td>
                    <td>
                      <p className="has-text-centered">{singleUser.email}</p>
                    </td>
                    <td>
                      <p className="has-text-centered">{singleUser.role}</p>
                    </td>
                    <td>
                      <p className="has-text-centered">{singleUser._id}</p>
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
            <div>
              <button className="button  is-rounded" onClick={handleBlock}>
                Remove
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SuperAdminView
