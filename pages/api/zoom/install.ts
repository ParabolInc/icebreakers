import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../lib/zoom/with-session";
import { getInstallURL } from "../../../lib/zoom/zoom-api";

export default withSessionRoute(installRoute);

interface Data {}

async function installRoute(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { url, state, verifier } = getInstallURL();

  req.session.state = state;
  req.session.verifier = verifier;
  await req.session.save();

  res.redirect(url.href);
}
