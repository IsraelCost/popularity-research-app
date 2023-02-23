import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import { cityGateway } from '../../infra/gateways/city'
import { surveyGateway } from '../../infra/gateways/survey'
import SurveyVote from '../../ui/templates/survey-vote'

const VotePage = ({ thumb, title }: any) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={thumb} />
        <title>{title}</title>
      </Head>
      <SurveyVote />
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> => {
  const { query: { id: surveyId } } = ctx

  const survey = await surveyGateway.getOne(surveyId as any)

  let city

  if (survey?.cityId) {
    city = await cityGateway.getOne(survey?.cityId)
  }

  return {
    props: {
      thumb: city?.picture || 'https://popularity-research.s3.sa-east-1.amazonaws.com/logo.jpg',
      title: survey?.label || 'Outside pesquisas de popularidade'
    }
  }
}

export default VotePage
