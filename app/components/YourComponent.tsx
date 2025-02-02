import { Suspense } from 'react'

export default function ParentComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentUsingSearchParams />
            </Suspense>
        </div>
    )
}

function ComponentUsingSearchParams() {
    const searchParams = useSearchParams()
    // ... rest of your component code ...
} 