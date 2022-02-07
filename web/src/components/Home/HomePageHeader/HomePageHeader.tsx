import { Link, routes } from '@redwoodjs/router'

const HomePageHeader = () => {
  return (
    <div className="mx-auto px-4 sm:px-6">
      <div className="flex border-b-2 border-gray-100 py-6 md:space-x-10">
        <div className="space-x-10">
          <Link
            to={routes.users()}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Authors
          </Link>
          <Link
            to={routes.posts()}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Posts
          </Link>
          <Link
            to={routes.tags()}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Tags
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePageHeader
