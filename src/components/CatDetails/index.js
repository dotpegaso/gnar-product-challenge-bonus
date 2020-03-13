import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import COLORS from '../../constants/colors'
import Card from '../Card'
import { chartData, chartColors } from './_mock'
import {
  Container,
  Preview,
  Box,
  Subtitle,
  Fillbar,
  Gauge,
  Gallery,
  GalleryThumb,
  GalleryTitle
} from './styles'

function CatDetails(props) {
  const { cats } = props
  const { id } = useParams() // get the :id param from route

  const currentCat = cats.filter(obj => obj.id === id)[0]
  const footerCats = cats.map( (cat, index) => (index < 7 && cat.id !== currentCat.id) && cat )  

  return (
    <Container>
      <Preview src={currentCat.photo} alt={currentCat.name} />

      <Card 
        title={currentCat.name} 
        width="55.5%" 
        height="75vh" 
        contentHeight="65vh"
        margin="0 30px"
        flexwrap
      >
        <Box>
          <Subtitle big>About</Subtitle>
          <Subtitle width="33%">
            <b>Age: </b>
            {`${currentCat.age} years`}
          </Subtitle>
          <Subtitle width="33%" large>
            <b>Favorite activity: </b>
            {currentCat.activity}
          </Subtitle>
          <Subtitle width="33%" large>
            <b>Pet peave: </b>
            {currentCat.peave}
          </Subtitle>
          <Subtitle width="50%">
            <b>Location: </b>
            {currentCat.location || 'Not purrrvided'}
          </Subtitle>
          <Subtitle width="50%">
            <b>Medical record: </b>
            {currentCat.medical || 'Not purrrvided'}
          </Subtitle>
          <Subtitle>
            <b>Bio: </b>
            {currentCat.bio || 'Not purrrvided'}
          </Subtitle>
        </Box>

        <Box width="50%">
          <Subtitle big>Personality</Subtitle>
          <Subtitle><b>Curious</b></Subtitle>
          <Fillbar>
            <Gauge fill={currentCat.curious} />
          </Fillbar>
          <Subtitle><b>Friendly</b></Subtitle>
          <Fillbar>
            <Gauge fill={currentCat.friendly} />
          </Fillbar>
          <Subtitle><b>Energetic</b></Subtitle>
          <Fillbar>
            <Gauge fill={currentCat.energetic} />
          </Fillbar>
        </Box>

        <Box width="20%" className="graph" middle>
          <Subtitle big><b>Average day</b></Subtitle>
          <Subtitle width="100%"><b>Meowing: 25%</b></Subtitle>
          <Fillbar transparent>
            <Gauge fill={25} fillColor={COLORS.LEGEND_1} />
          </Fillbar>
          <Subtitle width="100%"><b>Hunting: 7%</b></Subtitle>
          <Fillbar transparent>
            <Gauge fill={7} fillColor={COLORS.LEGEND_2} />
          </Fillbar>
          <Subtitle width="100%"><b>Sleeping: 55%</b></Subtitle>
          <Fillbar transparent>
            <Gauge fill={55} fillColor={COLORS.LEGEND_3} />
          </Fillbar>
          <Subtitle width="100%"><b>Eating: 13%</b></Subtitle>
          <Fillbar transparent>
            <Gauge fill={13} fillColor={COLORS.LEGEND_4} />
          </Fillbar>
        </Box>

        <Box width="20%">
          <ResponsiveContainer width={200} height="100%">
            <PieChart>
              <Pie dataKey="value" data={chartData} cx="40%" cy="50%" outerRadius={60}>
                {
                  chartData.map((entry, index) => (
                    <Cell key={entry.value} fill={chartColors[index]} />
                  ))
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>      
        </Box>

      </Card>

      <Gallery>
        <GalleryTitle>SEE MORE CATS</GalleryTitle>
        { footerCats.map(cat => cat && (
          <Link key={cat.id} to={`/details/${cat.id}`}>
            <GalleryThumb src={cat.photo} alt="Next cat preview" />
          </Link>
        )) }    
      </Gallery>

    </Container>
  )
}

const mapStateToProps = state => ({
  state,
  cats: state.list.cats,
})

export default connect(mapStateToProps)(CatDetails)
