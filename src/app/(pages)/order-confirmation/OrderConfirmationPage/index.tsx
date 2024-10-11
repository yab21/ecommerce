'use client'

import React, { Fragment, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Message } from '../../../_components/Message'
import { useCart } from '../../../_providers/Cart'

import classes from './index.module.scss'

export const OrderConfirmationPage: React.FC<{}> = () => {
  const searchParams = useSearchParams()
  const orderID = searchParams.get('order_id')
  const error = searchParams.get('error')

  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      {error ? (
        <Fragment>
          <Message error={error} />
          <p>
            {`Votre paiement a été effectué avec succès, mais une erreur s'est produite lors du traitement de votre commande. Veuillez nous contacter pour résoudre ce problème.`}
          </p>
          <div className={classes.actions}>
            <Button href="/account" label="Voir le compte" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="Voir toutes les commandes"
              appearance="secondary"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Merci pour votre commande !</h1>
          <p>
            {`Votre commande a été confirmée. Vous recevrez sous peu un courriel de confirmation. Votre numéro de commande est ${orderID}.`}
          </p>
          <div className={classes.actions}>
            <Button
              href={`/account/orders/${orderID}`}
              label="Voir la commande"
              appearance="primary"
            />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/account/orders`}
              label="Voir toutes les commandes"
              appearance="secondary"
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}
