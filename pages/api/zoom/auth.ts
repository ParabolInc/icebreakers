import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../lib/zoom/with-session";
import { getDeeplink, getToken } from "../../../lib/zoom/zoom-api";

type Data = {
  name?: string;
  error?: string;
};

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse<Data>) {
  req.session.state = null;

  console.log('========auth req.session========', req.session)
  try {
    const code = req.query.code;
    const verifier = req.session.verifier;

    req.session.verifier = null;

    // get Access Token from Zoom
    const { access_token: accessToken } = await getToken(code, verifier);

    // fetch deeplink from Zoom API
    const deeplink = await getDeeplink(accessToken);

    await req.session.save();
    // redirect the user to the Zoom Client
    res.redirect(deeplink);
  } catch (e: any) {
    res.status(500).send({ error: e.message });
  }
}
