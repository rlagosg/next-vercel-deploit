import Link from "next/link"
import { useRouter } from "next/router"
import React, { FC, CSSProperties } from 'react'

const style: CSSProperties ={
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
  texto: string,
  href: string
}

export const ActiveLink: FC<Props> = ({ texto, href }) => {

  const { asPath } = useRouter();  

  return (
    <Link href={href} style={ asPath === href ? style : undefined}> {texto} </Link>
  )
}
