import { WordHeader, Meaning } from '../index.js';

export default function DictionaryResponse({ response }) {
  return (
    <section className="m-auto padding">
      <WordHeader response={response} />
      {response?.map((searchWordInfo) => (
        <Meaning key={searchWordInfo.word} searchWordInfo={searchWordInfo} />
      ))}
    </section>
  );
}
