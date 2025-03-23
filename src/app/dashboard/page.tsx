import { Button } from '@/components/button'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FolderOpenIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Total Projects', stat: '12', icon: FolderOpenIcon, change: '12%', changeType: 'increase' },
  { id: 2, name: 'Active Users', stat: '3', icon: UserGroupIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Completion Rate', stat: '78%', icon: DocumentChartBarIcon, change: '3.2%', changeType: 'decrease' },
  { id: 4, name: 'Conversion Rate', stat: '24.5%', icon: CursorArrowRaysIcon, change: '4.1%', changeType: 'increase' },
]

const recentActivity = [
  { id: 1, user: 'Sarah Johnson', action: 'created a new project', project: 'Marketing Campaign', time: '2 hours ago' },
  { id: 2, user: 'Mark Davis', action: 'updated', project: 'Q2 Sales Report', time: '5 hours ago' },
  { id: 3, user: 'Emily Chen', action: 'commented on', project: 'Website Redesign', time: '1 day ago' },
  { id: 4, user: 'You', action: 'completed task in', project: 'Product Launch', time: '2 days ago' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const metadata = {
  title: 'Dashboard',
  description: 'Your project dashboard and overview.',
}

export default function Dashboard() {
  return (
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {stats.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:pt-6"
              >
                <dt>
                  <div className="absolute rounded-md bg-gray-500/10 p-3">
                    <item.icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                  <p
                    className={classNames(
                      item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                      'ml-2 flex items-baseline text-sm font-semibold'
                    )}
                  >
                    {item.changeType === 'increase' ? (
                      <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                    ) : (
                      <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                    )}
                    <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                    {item.change}
                  </p>
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h2>
              <Button className="text-sm" href="/dashboard/activity">
                View all
              </Button>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg shadow">
              <ul role="list" className="divide-y divide-gray-200 bg-white">
                {recentActivity.map((activity) => (
                  <li key={activity.id} className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500/10">
                          <span className="text-sm font-medium leading-none text-gray-700">
                            {activity.user.charAt(0)}
                          </span>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">
                          {activity.user}{' '}
                          <span className="font-normal text-gray-500">
                            {activity.action}{' '}
                            <span className="font-medium text-gray-900">{activity.project}</span>
                          </span>
                        </p>
                        <p className="truncate text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium leading-6 text-gray-900">Your Projects</h2>
              <Button className="text-sm" href="/dashboard/projects/new">
                New Project
              </Button>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg shadow">
              <div className="bg-white py-12 text-center">
                <FolderOpenIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No projects yet</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
                <div className="mt-6">
                  <Button href="/dashboard/projects/new">
                    New Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 