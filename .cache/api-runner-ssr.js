var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/raghavshrivastav/Desktop/Canfone_Website_Gatsby/Website-Gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-fontawesome-css',
      plugin: require('/Users/raghavshrivastav/Desktop/Canfone_Website_Gatsby/Website-Gatsby/node_modules/gatsby-plugin-fontawesome-css/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-source-prismic',
      plugin: require('/Users/raghavshrivastav/Desktop/Canfone_Website_Gatsby/Website-Gatsby/node_modules/gatsby-source-prismic/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"canfone-gatsby","lang":"*","schemas":{"homepage":{"Main":{"intro_content":{"type":"Group","config":{"fields":{"img_intro_hero":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Intro Hero Image"}},"intro_title":{"type":"StructuredText","config":{"single":"heading1","label":"Intro Title"}},"intro_subtitle":{"type":"StructuredText","config":{"single":"heading1","label":"Intro Subtitle"}},"intro_desc_lists":{"type":"StructuredText","config":{"multi":"paragraph, list-item, o-list-item","label":"Intro Description","placeholder":"Please input descriptions"}},"start_price":{"type":"Number","config":{"label":"starting price","placeholder":"Please input starting monthly price"}}}}},"section":{"type":"Group","config":{"fields":{"section_hero":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Section hero"}},"main_title":{"type":"StructuredText","config":{"single":"heading1","label":"Main title","placeholder":"Please input title"}},"title_desc":{"type":"Text","config":{"label":"Title description","placeholder":"Please input title description"}},"sub_title":{"type":"StructuredText","config":{"single":"heading2","label":"Sub title","placeholder":"Please input subtitle"}},"section_desc":{"type":"Text","config":{"label":"Section description","placeholder":"Please input section description"}},"section_content":{"type":"StructuredText","config":{"multi":"paragraph, list-item","label":"Section Content","placeholder":"Please fill section content"}}},"label":"Section"}}}},"order_confirm":{"Main":{"title":{"type":"Text","config":{"label":"Title","placeholder":"Please input your title here."}},"description1":{"type":"Text","config":{"label":"Description1","placeholder":"Please input description here."}},"description2":{"type":"Text","config":{"label":"Description2","placeholder":"Please input description here."}}}},"tos":{"Main":{"tos_content_group":{"type":"Group","config":{"fields":{"tos_content":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","label":"TOS content","placeholder":"Please fill content here."}}},"label":"TOS content group"}}}}}},
    },{
      name: 'gatsby-plugin-preload-fonts',
      plugin: require('/Users/raghavshrivastav/Desktop/Canfone_Website_Gatsby/Website-Gatsby/node_modules/gatsby-plugin-preload-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Open Sans","variants":["300","400","600","700","800"]},{"family":"Roboto","variants":["300","400","500","700","900"]},{"family":"Barlow|Barlow Semi Condensed","variants":["300","400","500","700"]}],"display":"swap"},
    },{
      name: 'default-site-plugin',
      plugin: require('/Users/raghavshrivastav/Desktop/Canfone_Website_Gatsby/Website-Gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
