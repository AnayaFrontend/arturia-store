import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex flex-col items-center mt-2">
                <div className="text-base uppercase leading-4">Arturia Store</div>
            </div>
        </Link>
    )
}