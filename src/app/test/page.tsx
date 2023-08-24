import { serverClient } from '../_trpc/serverClient'

async function page() {
  const getUsers = await serverClient.getUsers()

  //   console.log(getUsers)
  return <div>page</div>
}

export default page
