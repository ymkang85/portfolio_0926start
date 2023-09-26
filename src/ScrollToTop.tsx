import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
    children: React.ReactNode
}

const ScrollToTop = ({ children }: Props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <div>ScrollToTop</div>
    )
}

export default ScrollToTop