import Head from 'next/head'

interface CustomHeadProps {
  title: string
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
		<>
			<Head>
				<title>{title} | サイト名</title>
			</Head>
		</>
  )
}

export default CustomHead
