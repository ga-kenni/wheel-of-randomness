import Wheel from "./Wheel"

export default function WheelPage() {
    return <main className="flex min-h-screen flex-col items-center justify-start p-24">
        <h1>Wheel of randomness</h1>
        <h2>Hello</h2>
        <Wheel options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} />
    </main>
}
