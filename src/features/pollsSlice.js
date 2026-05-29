import { createSlice, nanoid } from '@reduxjs/toolkit';
import { questions, users } from './_Data.js';

const pollsSlice = createSlice({
  name: 'polls',
  initialState: { questions, users },
  reducers: {
    answerQuestion: (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      const question = state.questions[qid];
      if (!question || !state.users[authedUser]) return;
      question.optionOne.votes = question.optionOne.votes.filter((id) => id !== authedUser);
      question.optionTwo.votes = question.optionTwo.votes.filter((id) => id !== authedUser);
      question[answer].votes.push(authedUser);
      state.users[authedUser].answers[qid] = answer;
    },
    addQuestion: {
      reducer: (state, action) => {
        const question = action.payload;
        state.questions[question.id] = question;
        state.users[question.author].questions.push(question.id);
      },
      prepare: ({ optionOneText, optionTwoText, author }) => ({
        payload: { id: nanoid(), author, timestamp: Date.now(), optionOne: { votes: [], text: optionOneText }, optionTwo: { votes: [], text: optionTwoText } },
      }),
    },
  },
});

export const { answerQuestion, addQuestion } = pollsSlice.actions;
export default pollsSlice.reducer;
