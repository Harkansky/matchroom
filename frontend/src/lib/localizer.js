import moment from 'moment'
import 'moment/locale/fr'
import { momentLocalizer } from 'react-big-calendar'

moment.locale('fr')
export const localizer = momentLocalizer(moment)
