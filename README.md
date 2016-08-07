blog.ryankelly.us
=================

Initially:

    ./tools/setup.sh
    . virtualenv/bin/activate

Developing:

    ./tools/serve.sh

Site will begin serving on port 8686.

Deploying:

    ./tools/deploy.py

This will push the files to the s3 bucket "blog.ryankelly.us".

Layout:

All servable files are under `web`. The index is `index.html`. Add articles by
copying an existing one as a template into folders named after the year, month,
and day. For example, an article about jimmy on 2016-07-11 will be located at
`web/2016/07/11/jimmy.html`

License:

Content is available under the CC BY-NC-ND 3.0 license. See CONTENT-LICENSE.

Code is available under MIT license. See LICENSE.
