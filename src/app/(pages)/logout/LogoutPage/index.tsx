'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('Déconnexion réussie.')
      } catch (_) {
        setError('Vous êtes déjà déconnecté.')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div>
          <h1>{error || success}</h1>
          <p>
            {'Que souhaitez-vous faire ensuite ?'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                {' '}
                <Link href={`/${productsPage.slug}`}>Cliquez ici</Link>
                {` pour faire des achats.`}
              </Fragment>
            )}
            {` Pour se connecter à nouveau, `}
            <Link href="/login">cliquez ici</Link>
            {'.'}
          </p>
        </div>
      )}
    </Fragment>
  )
}
