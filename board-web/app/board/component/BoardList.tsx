export default function BoardList({ people }: any) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person: any) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={person.profile_picture}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-yellow-50-900">
                {person.title}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                {person.content}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-50">
              {person.userId} / {person.email}
            </p>
            {person.lastSeen ? (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-yellow-500">Online</p>
              </div>
            ) : (
              <p className="mt-1 text-xs leading-5 text-gray-200">
                Date <time dateTime={person.createdAt}>{person.createdAt}</time>
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
