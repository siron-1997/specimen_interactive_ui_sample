import React, { useEffect, useRef } from 'react'
import Experience from './experience/Experience'

export default function Canvas () {
    const ref = useRef()

    useEffect(() => {
        const canvas = ref.current
        Experience(canvas)
    }, [])

    return <canvas ref={ref} />
}