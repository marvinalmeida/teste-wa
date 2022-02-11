import api from './api'

export const getAllQuestions = (question) => api.get(`/api.php?amount=${question}`)
