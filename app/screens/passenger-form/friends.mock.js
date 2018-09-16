import randomColor from 'randomcolor'
import asianGuy from '../../../test_images/avatars/asian_guy.png'
import asianLady from '../../../test_images/avatars/asian_lady.png'
import dinosaur from '../../../test_images/avatars/dinosaur.png'
import doge from '../../../test_images/avatars/doge.png'
import johnny from '../../../test_images/avatars/johnny.png'
import baldGuy from '../../../test_images/avatars/bald_guy.png'

export default [
  {
    title: 'Mr',
    firstName: 'Ross',
    lastName: 'Geller',
    dateOfBirth: '1985-01-20',
    passportId: 'A111111111',
    nationality: 'US',
    avatar: {
      image: dinosaur,
      color: randomColor(),
    },
    type: 'adult',
  },
  {
    title: 'Mrs',
    firstName: 'Rachel',
    lastName: 'Green',
    dateOfBirth: '1987-05-24',
    passportId: 'A111111115',
    nationality: 'US',
    avatar: {
      image: baldGuy,
      color: randomColor(),
    },
    type: 'adult',
  },
  {
    title: 'Mr',
    firstName: 'Chandler',
    lastName: 'Bing',
    dateOfBirth: '1984-02-21',
    passportId: 'A111111112',
    nationality: 'US',
    avatar: {
      image: asianGuy,
      color: randomColor(),
    },
    type: 'adult',
  },
  {
    title: 'Mrs',
    firstName: 'Monica',
    lastName: 'Geller',
    dateOfBirth: '1986-04-23',
    passportId: 'A111111114',
    nationality: 'US',
    avatar: {
      image: asianLady,
      color: randomColor(),
    },
    type: 'adult',
  },
  {
    title: 'Mr',
    firstName: 'Joey',
    lastName: 'Tribbiani ',
    dateOfBirth: '1983-03-22',
    passportId: 'A111111113',
    nationality: 'IT',
    avatar: {
      image: johnny,
      color: randomColor(),
    },
    type: 'adult',
  },
  {
    title: 'Mrs',
    firstName: 'Phoebe',
    lastName: 'Buffay',
    dateOfBirth: '1988-06-25',
    passportId: 'A111111116',
    nationality: 'US',
    avatar: {
      image: doge,
      color: randomColor(),
    },
    type: 'adult',
  },
]
