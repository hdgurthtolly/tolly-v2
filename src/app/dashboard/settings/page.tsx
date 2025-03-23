import { Button } from '@/components/button'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const userSettings = {
  name: 'Harry Dev',
  email: 'harry@example.com',
  photo: '/images/placeholders/avatar.jpg',
}

const notificationSettings = [
  { id: 'email_notifications', name: 'Email Notifications', description: 'Receive email notifications', enabled: true },
  { id: 'push_notifications', name: 'Push Notifications', description: 'Receive push notifications', enabled: true },
  { id: 'weekly_digest', name: 'Weekly Digest', description: 'Receive a weekly summary of activity', enabled: false },
]

const teamVisibilityOptions = [
  { id: 'private', name: 'Private' },
  { id: 'team', name: 'Team' },
  { id: 'public', name: 'Public' },
]

export const metadata = {
  title: 'Settings',
  description: 'Manage your account settings.',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Settings() {
  return (
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Settings</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10 divide-y divide-gray-900/10">
            {/* Profile section */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 pt-10">
              <div className="px-4 sm:px-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>

              <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black sm:max-w-md">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={userSettings.name}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black sm:max-w-md">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={userSettings.email}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Photo
                      </label>
                      <div className="mt-2 flex items-center gap-x-3">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500/10">
                          <span className="text-sm font-medium leading-none text-gray-700">
                            {userSettings.name.charAt(0)}
                          </span>
                        </span>
                        <Button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </div>
            </div>

            {/* Notification settings */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
              <div className="px-4 sm:px-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Decide which communications you'd like to receive.
                </p>
              </div>

              <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                  <div className="max-w-2xl space-y-10">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                      <div className="mt-6 space-y-6">
                        {notificationSettings.map((setting) => (
                          <div key={setting.id} className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id={setting.id}
                                name={setting.id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                                defaultChecked={setting.enabled}
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label htmlFor={setting.id} className="font-medium text-gray-900">
                                {setting.name}
                              </label>
                              <p className="text-gray-500">{setting.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </div>
            </div>

            {/* Project settings */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
              <div className="px-4 sm:px-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Project Settings</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Configure your default project settings.
                </p>
              </div>

              <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                  <div className="max-w-2xl space-y-10">
                    <div>
                      <label htmlFor="visibility" className="block text-sm font-medium leading-6 text-gray-900">
                        Default Team Visibility
                      </label>
                      <select
                        id="visibility"
                        name="visibility"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-black sm:text-sm sm:leading-6"
                        defaultValue="team"
                      >
                        <option value="private">Private</option>
                        <option value="team">Team</option>
                        <option value="public">Public</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 