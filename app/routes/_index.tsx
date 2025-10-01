import type {Route} from "./+types/_index";

export const loader = ({context}: Route.LoaderArgs) => ({
  remoteAddress: context.remoteAddress,
});

export const meta = () => {
  return [{title: "React Router Demo"}];
};

export default function Index({loaderData}: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="mt-8 w-full max-w-4xl overflow-x-auto">
        <table className="w-full border-collapse bg-gray-100 shadow-md rounded-lg">
          <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Key</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Value</th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">remoteAddress</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{loaderData.remoteAddress}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
