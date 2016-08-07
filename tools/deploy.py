#!/usr/bin/env python
# Copyright 2016, Ryan Kelly.

from __future__ import absolute_import

import base64
import hashlib
import mimetypes
import os
import os.path
import re

import botocore.session


session = botocore.session.get_session()

s3_client = session.create_client("s3")

for root, dirs, files in os.walk("web"):
    for file in files:
        content_path = os.path.join(root, file)
        s3_path = re.sub(r'^web/', "", content_path)

        with open(content_path, "rb") as fp:

            content = fp.read()
            content_md5 = base64.b64encode(hashlib.md5(content).digest())

            content_type, _ = mimetypes.guess_type(content_path)

            s3_client.put_object(
                Key=s3_path,
                ACL="public-read",
                Body=content,
                Bucket="blog.ryankelly.us",
                ContentMD5=content_md5,
                ContentType=content_type,
            )
