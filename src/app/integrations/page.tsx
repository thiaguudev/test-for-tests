import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Survey Apoli - Integrations",
  description: "Integrations with other apps",
};

export default function IntegrationsPage() {
  return (
    <Container>
      <h2 className="font-bold text-3xl">Integrations</h2>

      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="flex py-3 px-5 rounded-md border border-transparent shadow-lg hover:border-blue-200 gap-5 items-center cursor-pointer justify-center">
          <div className="">
            <svg
              className="h-14 w-14"
              id="slack-icon"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                fill="#36C5F0"
                fill-rule="evenodd"
              ></path>
              <path
                clip-rule="evenodd"
                d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                fill="#2EB67D"
                fill-rule="evenodd"
              ></path>
              <path
                clip-rule="evenodd"
                d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                fill="#ECB22E"
                fill-rule="evenodd"
              ></path>
              <path
                clip-rule="evenodd"
                d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                fill="#E01E5A"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>

          <Separator orientation="vertical" />

          <div>
            <strong className="text-xl block mb-2">Slack</strong>
            <p className="text-gray-400">
              Send your Delighted Surveys feedback into Slack channels for
              realtime visibility.
            </p>
          </div>
        </div>
        <div className="flex py-3 px-5 rounded-md border border-transparent shadow-lg hover:border-blue-200 gap-5 items-center cursor-pointer justify-center h-[128px]">
          <svg
            className="h-14 w-14"
            id="webhooks-icon"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M28.1197 23.4127C25.6239 27.6082 23.2326 31.6713 20.7916 35.7036C20.1648 36.7388 19.8546 37.5819 20.3554 38.898C21.738 42.5332 19.7876 46.0707 16.1217 47.0311C12.6646 47.9369 9.29636 45.6648 8.61043 41.9635C8.00262 38.6873 10.545 35.4758 14.1569 34.9638C14.4597 34.9205 14.7685 34.9154 15.2772 34.8773C17.0472 31.9094 18.8603 28.8694 20.7717 25.6639C17.316 22.2277 15.2591 18.2107 15.7144 13.2334C16.0362 9.71495 17.4197 6.67452 19.9485 4.18238C24.7919 -0.589845 32.1809 -1.36274 37.8837 2.30037C43.3609 5.81885 45.8693 12.6726 43.7311 18.5386C42.1188 18.1015 40.4953 17.6606 38.7105 17.1765C39.382 13.9152 38.8854 10.9864 36.6857 8.47748C35.2325 6.82101 33.3677 5.95279 31.2471 5.63284C26.9962 4.99062 22.8225 7.72179 21.5841 11.8941C20.1783 16.6296 22.3058 20.4978 28.1197 23.4127Z"
              fill="#C73A63"
              fill-rule="evenodd"
            ></path>
            <path
              clip-rule="evenodd"
              d="M35.247 18.4511C37.0053 21.5529 38.7906 24.7017 40.5601 27.8216C49.5037 25.0546 56.2468 30.0054 58.6659 35.306C61.5877 41.7086 59.5904 49.292 53.8518 53.242C47.9616 57.2972 40.5126 56.6043 35.294 51.3954C36.624 50.2821 37.9605 49.1636 39.3886 47.969C44.5431 51.3075 49.0512 51.1503 52.3981 47.197C55.252 43.8245 55.1902 38.7961 52.2535 35.4943C48.8643 31.6842 44.3246 31.568 38.8371 35.2255C36.5607 31.1871 34.2449 27.1808 32.0406 23.1131C31.2974 21.7422 30.4766 20.947 28.8016 20.6568C26.0039 20.1717 24.1977 17.7693 24.0893 15.0777C23.9828 12.4158 25.551 10.0097 28.0022 9.07219C30.4301 8.14351 33.2794 8.89315 34.9126 10.9575C36.2473 12.6442 36.6714 14.5424 35.9692 16.6226C35.7739 17.2025 35.5209 17.7638 35.247 18.4511Z"
              fill="#4B4B4B"
              fill-rule="evenodd"
            ></path>
            <path
              clip-rule="evenodd"
              d="M39.4494 43.8088C35.9128 43.8088 32.3632 43.8088 28.6829 43.8088C27.6509 48.0532 25.422 51.48 21.5812 53.6592C18.5957 55.3529 15.3776 55.9272 11.9526 55.3743C5.64669 54.3572 0.490347 48.6805 0.0364688 42.2881C-0.477399 35.047 4.49991 28.6104 11.1342 27.1646C11.5922 28.828 12.0549 30.5072 12.513 32.1665C6.4261 35.272 4.31948 39.1849 6.02291 44.0775C7.52266 48.3833 11.7824 50.7434 16.4077 49.8305C21.1311 48.8986 23.5126 44.9732 23.2219 38.6733C27.6998 38.6733 32.1813 38.6268 36.6597 38.6961C38.4082 38.7236 39.7582 38.5422 41.0757 37.0006C43.2446 34.4638 47.2365 34.6926 49.5724 37.0885C51.9594 39.5369 51.845 43.4767 49.3189 45.8219C46.8817 48.0848 43.0312 47.9639 40.7511 45.5257C40.2823 45.023 39.9131 44.4263 39.4494 43.8088Z"
              fill="#4A4A4A"
              fill-rule="evenodd"
            ></path>
          </svg>

          <Separator orientation="vertical" />
          <div>
            <strong className="text-xl block mb-2">Webhooks</strong>
            <p className="text-gray-400">
              Send a web request to your server following new or updated survey
              submissions.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
