# Brand and icon research findings

Lumina should add original social and commerce icon categories, but should not present third-party logos as Lumina-owned artwork or imply endorsement. GitHub’s official brand guidance permits permitted GitHub marks for linking, social buttons, and showing integration, while prohibiting modification, substitution as a product logo, or implied affiliation. Source: https://brand.github.com/foundations/logo

Google’s official Brand Resource Center warns against implying endorsement or imitating Google’s visual identity. It permits certain informational and educational uses, while product-icon uses may require additional guidance or permission. Source: https://about.google/brand-resource-center/guidance/

Shopify’s official brand guidance says use of its brand assets must be expressly authorized and must not imply sponsorship or endorsement. Source: https://www.shopify.com/brand-assets

Font Awesome’s free license distinguishes icon files, fonts, and code licenses and states that brand icons are trademarks of their respective owners and should represent only the company, product, or service they refer to. Lumina will use category names and original icon implementations, and will document that brand marks should be reviewed against each owner’s rules. Source: https://fontawesome.com/license/free

Implementation decision: add an opt-in `lumina-brands` icon runtime with clearly named brand symbols for representational UI contexts, plus original generic commerce icons for cart, bag, package, shipping, payment, receipt, discount, wishlist, compare, returns, stock, and order states. Keep stable unversioned jsDelivr URLs on the repository’s `main` branch and retain versioned tags for reproducible builds.
