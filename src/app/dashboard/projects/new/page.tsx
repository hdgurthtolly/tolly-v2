'use client'

import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { useState } from 'react'

export default function NewProject() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    visibility: 'team',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    // For now, we'll just redirect to the projects page
    window.location.href = '/dashboard/projects'
  }

  return (
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl flex items-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Create New Project</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl">
          <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-10">
            <div className="bg-white p-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
              <div className="space-y-8 divide-y divide-gray-900/10">
                <div className="space-y-6 pt-6 first:pt-0">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Project Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of your project. This will be visible to your team.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="visibility" className="block text-sm font-medium leading-6 text-gray-900">
                      Visibility
                    </label>
                    <select
                      id="visibility"
                      name="visibility"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                      value={formData.visibility}
                      onChange={handleChange}
                    >
                      <option value="private">Private - Only you</option>
                      <option value="team">Team - All team members</option>
                      <option value="public">Public - Anyone with the link</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6 pt-6">
                  <div>
                    <h3 className="text-sm font-medium leading-6 text-gray-900">Team Members</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      You can add team members after creating the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-x-6">
              <Link href="/dashboard/projects" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </Link>
              <Button type="submit">Create Project</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
} 