import Airtable from "airtable";

export type Icebreaker = {
  question: string;
  id: string;
};

export const allIcebreakers = () =>
  new Promise<Icebreaker[]>((resolve, reject) => {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      "appfMZVd3OpP7Et6V"
    );

    const icebreakers: Icebreaker[] = [];

    base("list")
      .select({
        maxRecords: 1000,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          icebreakers.push(
            ...records.map((record) => {
              const question = record.get("question") as string;

              return { id: record.id!, question: question.trim() };
            })
          );

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            return reject(err);
          }

          return resolve(icebreakers);
        }
      );
  });

export const generateRandomIcebreaker = (icebreakers: Icebreaker[]) => {
  return icebreakers[Math.floor(Math.random() * icebreakers.length)];
};
