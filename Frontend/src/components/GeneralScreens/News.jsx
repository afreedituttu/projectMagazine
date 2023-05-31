import React from 'react'
import {styled} from 'styled-components'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'

const Wrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  padding:1rem 5rem;
`
const CardWrapper = styled.div`
    width:100%;
    padding:2rem 2rem;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`
const Card = styled.div`
    width:80%;
    display:flex;
    border:1px solid #333;
    margin:1rem 0rem;
`
const CardImage = styled.img`
    flex:2;
    width:10%;
`
const CardContent = styled.div`
    flex:8;
    padding:1rem;
`
const CardTitle = styled.h2`
    font-size:1.2rem;
`
const CardBody = styled.div``

const News = () => {
  return (
    <Wrapper>
        <CardWrapper>
            <Card>
                <CardImage src="http://mescet.ac.in/images/mescet-campus.jpg" />
                <CardContent>
                    <CardTitle>CAMPUS PROGRESSION AT ITS PEAK</CardTitle>
                    <CardBody>lore reokreosk reskofrpeksrfopk eofopekfpoeskfpoekfpokefokoef ope fpokeokfeokfpoeskfpoeskfokepofkeokfoek fe kfe kpe p  kp pofkpoekfpoekofpe e efefes</CardBody>

                </CardContent>
            </Card>
            <Card>
                <CardImage src="https://tse3.mm.bing.net/th?id=OIP.2-h3CKyMBWj-RE-9YoJR3QHaEK&pid=Api&P=0&h=180" />
                <CardContent>
                    <CardTitle>JOE BIDEN TO FACE NEW ELECTION</CardTitle>
                    <CardBody>lore reokreosk reskofrpeksrfopk eofopekfpoeskfpoekfpokefokoef ope fpokeokfeokfpoeskfpoeskfokepofkeokfoek fe kfe kpe p  kp pofkpoekfpoekofpe e efefes</CardBody>

                </CardContent>
            </Card>
            <Card>
                <CardImage src="https://tse3.mm.bing.net/th?id=OIP.nMh_dLKKDiQjLugBae1-FAHaFj&pid=Api&P=0&h=180" />
                <CardContent>
                    <CardTitle>SPACEX B9 LAUCHING SHEDULE SOON</CardTitle>
                    <CardBody>lore reokreosk reskofrpeksrfopk eofopekfpoeskfpoekfpokefokoef ope fpokeokfeokfpoeskfpoeskfokepofkeokfoek fe kfe kpe p  kp pofkpoekfpoekofpe e efefes</CardBody>

                </CardContent>
            </Card>
        </CardWrapper>
    </Wrapper>
  )
}

export default News
