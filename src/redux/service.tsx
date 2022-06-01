import axios from "axios";
import {API} from 'api/api.enum'

export const fetchListRepo = () => axios.get(API.GET_LIST_REPO)