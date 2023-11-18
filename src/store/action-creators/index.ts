import * as DataActionCreators from './data'
import * as CharacterActionCreators from './character'
export default {
    ...DataActionCreators,
    ...CharacterActionCreators
}