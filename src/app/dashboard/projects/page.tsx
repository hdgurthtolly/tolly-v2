import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/outline'

type Project = {
  id: number
  name: string
  description: string
  status: 'In Progress' | 'Completed' | 'Draft'
  lastUpdated: string
  progress: number
  team: {
    name: string
    imageUrl: string
  }[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website with new branding.',
    status: 'In Progress',
    lastUpdated: '3 days ago',
    progress: 35,
    team: [
      {
        name: 'Sarah Johnson',
        imageUrl: '/images/placeholders/avatar-1.jpg',
      },
      {
        name: 'Mark Davis',
        imageUrl: '/images/placeholders/avatar-2.jpg',
      },
      {
        name: 'Emily Chen',
        imageUrl: '/images/placeholders/avatar-3.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'Marketing Campaign',
    description: 'Q2 Marketing campaign focusing on social media and email.',
    status: 'Draft',
    lastUpdated: '1 week ago',
    progress: 15,
    team: [
      {
        name: 'Sarah Johnson',
        imageUrl: '/images/placeholders/avatar-1.jpg',
      },
    ],
  },
  {
    id: 3,
    name: 'Product Launch',
    description: 'Launch of new product line scheduled for Q3.',
    status: 'Completed',
    lastUpdated: '2 weeks ago',
    progress: 100,
    team: [
      {
        name: 'Emily Chen',
        imageUrl: '/images/placeholders/avatar-3.jpg',
      },
      {
        name: 'Mark Davis',
        imageUrl: '/images/placeholders/avatar-2.jpg',
      },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const metadata = {
  title: 'Projects',
  description: 'Manage your projects.',
}

export default function Projects() {
  return (
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Projects</h1>
          <Button href="/dashboard/projects/new">
            <PlusIcon className="-ml-1 mr-1 h-5 w-5" aria-hidden="true" />
            New Project
          </Button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                {projects.length > 0 ? (
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Project
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Progress
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Team
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Last Updated
                          </th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {projects.map((project) => (
                          <tr key={project.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div>
                                  <div className="font-medium text-gray-900">
                                    <Link href={`/dashboard/projects/${project.id}`}>
                                      {project.name}
                                    </Link>
                                  </div>
                                  <div className="mt-1 text-gray-500 line-clamp-1">{project.description}</div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                              <span
                                className={classNames(
                                  'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
                                  project.status === 'In Progress'
                                    ? 'bg-blue-50 text-blue-700'
                                    : project.status === 'Completed'
                                    ? 'bg-green-50 text-green-700'
                                    : 'bg-gray-100 text-gray-700'
                                )}
                              >
                                {project.status}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className={classNames(
                                    'h-full',
                                    project.status === 'Completed'
                                      ? 'bg-green-500'
                                      : project.status === 'In Progress'
                                      ? 'bg-blue-500'
                                      : 'bg-gray-400'
                                  )}
                                  style={{ width: `${project.progress}%` }}
                                />
                              </div>
                              <div className="text-xs text-gray-500 mt-1">{project.progress}%</div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="flex -space-x-1 overflow-hidden">
                                {project.team.map((person, personIdx) => (
                                  <div
                                    key={personIdx}
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    title={person.name}
                                  >
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500">
                                      <span className="text-xs font-medium leading-none text-white">
                                        {person.name.charAt(0)}
                                      </span>
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {project.lastUpdated}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <button
                                type="button"
                                className="text-gray-400 hover:text-gray-500"
                                aria-label="Project options"
                              >
                                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center">
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">No projects</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
                    <div className="mt-6">
                      <Button href="/dashboard/projects/new">
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        New Project
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 