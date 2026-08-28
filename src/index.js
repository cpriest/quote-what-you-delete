/**
 * Canonical-host redirect.
 *
 * Both www.quotewhatyoudelete.org and the apex are attached to this Worker as
 * custom domains, so without this the same page answers on two hostnames. The
 * canonical tags already tell search engines which one counts; this makes the
 * other one stop answering at all, so links and analytics consolidate and only
 * one URL circulates.
 *
 * Host-based, not domain-hardcoded, so it behaves the same in staging.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
