/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { MoonIcon as LucideMoonIcon, SunIcon as LucideSunIcon } from "lucide-react"
import NextLink from "next/link"
import NextHead from "next/head"



export function Fragment_2e0e6a4a3aec4136eedf42fc142b7aae () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <LucideSunIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
) : (
  <Fragment>
  <LucideMoonIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
)}
</Fragment>
  )
}

export function Link_7d0bb5237df999b20f279635c15c7e4d () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://reflex.dev/docs/getting-started/introduction/`} passHref={true}>
  <RadixThemesButton>
  {`Check out our docs!`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Iconbutton_126c1207e75571062288a84458b7ab68 () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesIconButton css={{"padding": "6px", "position": "fixed", "top": "2rem", "right": "2rem", "background": "transparent", "color": "inherit", "zIndex": "20", "&:hover": {"cursor": "pointer"}}} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>
  <Fragment_2e0e6a4a3aec4136eedf42fc142b7aae/>
</RadixThemesIconButton>
  )
}

export function Link_45925b1e7b16944cfa98bcd9d4959bc7 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} size={`3`}>
  <NextLink href={`https://reflex.dev`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"textAlign": "center", "padding": "1em"}} direction={`row`} gap={`3`}>
  {`Built with `}
  <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.6V0.400024H8.96V4.88002H6.72V2.64002H2.24V4.88002H6.72V7.12002H2.24V11.6H0ZM6.72 11.6V7.12002H8.96V11.6H6.72Z\" fill=\"#110F1F\"/>\n<path d=\"M11.2 11.6V0.400024H17.92V2.64002H13.44V4.88002H17.92V7.12002H13.44V9.36002H17.92V11.6H11.2Z\" fill=\"#110F1F\"/>\n<path d=\"M20.16 11.6V0.400024H26.88V2.64002H22.4V4.88002H26.88V7.12002H22.4V11.6H20.16Z\" fill=\"#110F1F\"/>\n<path d=\"M29.12 11.6V0.400024H31.36V9.36002H35.84V11.6H29.12Z\" fill=\"#110F1F\"/>\n<path d=\"M38.08 11.6V0.400024H44.8V2.64002H40.32V4.88002H44.8V7.12002H40.32V9.36002H44.8V11.6H38.08Z\" fill=\"#110F1F\"/>\n<path d=\"M47.04 4.88002V0.400024H49.28V4.88002H47.04ZM53.76 4.88002V0.400024H56V4.88002H53.76ZM49.28 7.12002V4.88002H53.76V7.12002H49.28ZM47.04 11.6V7.12002H49.28V11.6H47.04ZM53.76 11.6V7.12002H56V11.6H53.76Z\" fill=\"#110F1F\"/>\n</svg>"}}/>
</Fragment>
) : (
  <Fragment>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z\" fill=\"white\"/>\n<path d=\"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z\" fill=\"white\"/>\n<path d=\"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z\" fill=\"white\"/>\n<path d=\"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z\" fill=\"white\"/>\n<path d=\"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z\" fill=\"white\"/>\n<path d=\"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z\" fill=\"white\"/>\n</svg>"}}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <RadixThemesContainer css={{"padding": "16px"}} size={`3`}>
  <Iconbutton_126c1207e75571062288a84458b7ab68/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"minHeight": "85vh"}} direction={`column`} justify={`center`} gap={`5`}>
  <RadixThemesHeading size={`9`}>
  {`Welcome to Reflex!`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} size={`5`}>
  {`Get started by editing `}
  <RadixThemesCode>
  {`myweb/myweb.py`}
</RadixThemesCode>
</RadixThemesText>
  <Link_7d0bb5237df999b20f279635c15c7e4d/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center", "width": "100%"}}>
  <Link_45925b1e7b16944cfa98bcd9d4959bc7/>
</RadixThemesFlex>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Myweb | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
