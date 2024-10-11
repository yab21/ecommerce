import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { ResetPasswordForm } from './ResetPasswordForm'

import classes from './index.module.scss'

export default async function ResetPassword() {
  return (
    <Gutter className={classes.resetPassword}>
      <h1>Réinitialiser le mot de passe</h1>
      <p>Veuillez saisir un nouveau mot de passe ci-dessous.</p>
      <ResetPasswordForm />
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Réinitialiser le mot de passe',
  description: 'Entrez un nouveau mot de passe.',
  openGraph: mergeOpenGraph({
    title: 'Réinitialiser le mot de passe',
    url: '/reset-password',
  }),
}
