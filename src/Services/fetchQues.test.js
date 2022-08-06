import { fetchQues } from "../Services/fetchQues";
import axios from "axios"

jest.mock('axios')

describe("get quiz", () => {
    test("should return quiz when API call is successful", async () => {
      axios.get.mockResolvedValue({
        data: {
          results: [
            {
              category: "Science & Nature",
              type: "multiple",
              difficulty: "medium",
              correct_answer: "1996",
              incorrect_answer: ["2009", "1999", "1985"],
            },
          ],
        },
      });
      const ques = await fetchQues();
      expect(ques).toEqual({
        results:
        [
          {
            category: "Science & Nature",
            type: "multiple",
            difficulty: "medium",
            correct_answer: "1996",
            incorrect_answer: ["2009", "1999", "1985"],
          }
        ]
      }
  );
    });
  
    test("should return errorMessage when API is call fails", async () => {
      axios.get.mockRejectedValue({error:{
        response:undefined
      }});
      const ques = await fetchQues();
      expect(ques).toEqual(undefined);
    });
  });
  