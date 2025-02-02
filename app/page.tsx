import { Suspense } from 'react'

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MainContent />
        </Suspense>
    )
}

function MainContent() {
    const searchParams = useSearchParams()
    // ... rest of your component code ...
} 