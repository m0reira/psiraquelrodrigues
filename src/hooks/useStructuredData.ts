import { useEffect } from 'react'
import StructuredData from '../components/StructuredData'

export const useStructuredData = (type: 'psychologist' | 'service' | 'organization' | 'breadcrumb', data?: any) => {
  useEffect(() => {
    const component = StructuredData({ type, data })
    return component as any
  }, [type, data])
}
