Ext.data.JsonP.Ext_Configurator({"tagname":"class","name":"Ext.Configurator","autodetected":{},"files":[{"filename":"Ext.js","href":"Ext.html#Ext-Configurator"}],"private":true,"members":[{"name":"cachedConfigs","tagname":"property","owner":"Ext.Configurator","id":"property-cachedConfigs","meta":{"private":true,"readonly":true}},{"name":"cls","tagname":"property","owner":"Ext.Configurator","id":"property-cls","meta":{"private":true,"readonly":true}},{"name":"configs","tagname":"property","owner":"Ext.Configurator","id":"property-configs","meta":{"private":true,"readonly":true}},{"name":"initList","tagname":"property","owner":"Ext.Configurator","id":"property-initList","meta":{"private":true}},{"name":"initMap","tagname":"property","owner":"Ext.Configurator","id":"property-initMap","meta":{"private":true,"readonly":true}},{"name":"superCfg","tagname":"property","owner":"Ext.Configurator","id":"property-superCfg","meta":{"private":true,"readonly":true}},{"name":"values","tagname":"property","owner":"Ext.Configurator","id":"property-values","meta":{"private":true,"readonly":true}},{"name":"add","tagname":"method","owner":"Ext.Configurator","id":"method-add","meta":{"private":true}},{"name":"configure","tagname":"method","owner":"Ext.Configurator","id":"method-configure","meta":{"private":true}},{"name":"merge","tagname":"method","owner":"Ext.Configurator","id":"method-merge","meta":{"private":true}},{"name":"reconfigure","tagname":"method","owner":"Ext.Configurator","id":"method-reconfigure","meta":{"private":true}},{"name":"resolvePlatformConfig","tagname":"method","owner":"Ext.Configurator","id":"method-resolvePlatformConfig","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Ext.Configurator","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Ext.html#Ext-Configurator' target='_blank'>Ext.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>This class manages the config properties for a class.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cachedConfigs' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-property-cachedConfigs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-property-cachedConfigs' class='name expandable'>cachedConfigs</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>This object holds a bool value for each cachedConfig property keyed by name. ...</div><div class='long'><p>This object holds a bool value for each cachedConfig property keyed by name.</p>\n\n<p>This map is maintained as each property is added via the <code>add</code> method.</p>\n</div></div></div><div id='property-cls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-property-cls' class='name expandable'>cls</a> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The class to which this instance is associated.</p>\n</div><div class='long'><p>The class to which this instance is associated.</p>\n</div></div></div><div id='property-configs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-property-configs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-property-configs' class='name expandable'>configs</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>This object holds an Ext.Config value for each config property keyed by name. ...</div><div class='long'><p>This object holds an <code><a href=\"#!/api/Ext.Config\" rel=\"Ext.Config\" class=\"docClass\">Ext.Config</a></code> value for each config property keyed by name.\nThis object has as its prototype object the <code>configs</code> of its super class.</p>\n\n<p>This map is maintained as each property is added via the <code>add</code> method.</p>\n</div></div></div><div id='property-initList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-property-initList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-property-initList' class='name expandable'>initList</a> : <a href=\"#!/api/Ext.Config\" rel=\"Ext.Config\" class=\"docClass\">Ext.Config</a>[]<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This array holds the properties that need to be set on new instances. ...</div><div class='long'><p>This array holds the properties that need to be set on new instances.</p>\n\n<p>This array is populated when the first instance is passed to <code>configure</code> (basically\nwhen the first instance is created). The entries in <code>initMap</code> are iterated to find\nthose configs needing per-instance processing.</p>\n</div></div></div><div id='property-initMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-property-initMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-property-initMap' class='name expandable'>initMap</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>This object holds a Number for each config property keyed by name. ...</div><div class='long'><p>This object holds a <code>Number</code> for each config property keyed by name. This object has\nas its prototype object the <code>initMap</code> of its super class. The value of each property\nhas the following meaning:</p>\n\n<ul>\n<li><code>0</code> - initial value is <code>null</code> and requires no processing.</li>\n<li><code>1</code> - initial value must be set on each instance.</li>\n<li><code>2</code> - initial value can be cached on the prototype by the first instance.</li>\n</ul>\n\n\n<p>Any <code>null</code> values will either never be added to this map or (if added by a base\nclass and set to <code>null</code> by a derived class) will cause the entry to be 0.</p>\n\n<p>This map is maintained as each property is added via the <code>add</code> method.</p>\n</div></div></div><div id='property-superCfg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-property-superCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-property-superCfg' class='name expandable'>superCfg</a> : <a href=\"#!/api/Ext.Configurator\" rel=\"Ext.Configurator\" class=\"docClass\">Ext.Configurator</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The super class <code>Configurator</code> instance or <code>null</code> if there is no super class.</p>\n</div><div class='long'><p>The super class <code>Configurator</code> instance or <code>null</code> if there is no super class.</p>\n</div></div></div><div id='property-values' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-property-values' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-property-values' class='name expandable'>values</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>This object holds the default value for each config property keyed by name. ...</div><div class='long'><p>This object holds the default value for each config property keyed by name. This\nobject has as its prototype object the <code>values</code> of its super class.</p>\n\n<p>This map is maintained as each property is added via the <code>add</code> method.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-method-add' class='name expandable'>add</a>( <span class='pre'>config, [mixinClass]</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method adds new config properties. ...</div><div class='long'><p>This method adds new config properties. This is called for classes when they are\ndeclared, then for any mixins that class may define and finally for any overrides\ndefined that target the class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The config object containing the new config properties.</p>\n</div></li><li><span class='pre'>mixinClass</span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> (optional)<div class='sub-desc'><p>The mixin class if the configs are from a mixin.</p>\n</div></li></ul></div></div></div><div id='method-configure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-method-configure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-method-configure' class='name expandable'>configure</a>( <span class='pre'>instance, instanceConfig</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method configures the given instance using the specified instanceConfig. ...</div><div class='long'><p>This method configures the given <code>instance</code> using the specified <code>instanceConfig</code>.\nThe given <code>instance</code> should have been created by this object's <code>cls</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The instance to configure.</p>\n</div></li><li><span class='pre'>instanceConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The configuration properties to apply to <code>instance</code>.</p>\n</div></li></ul></div></div></div><div id='method-merge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-method-merge' class='name expandable'>merge</a>( <span class='pre'>instance, baseConfig, config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Merges the values of a config object onto a base config. ...</div><div class='long'><p>Merges the values of a config object onto a base config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><div class='sub-desc'>\n</div></li><li><span class='pre'>baseConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>the merged config</p>\n</div></li></ul></div></div></div><div id='method-reconfigure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-method-reconfigure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-method-reconfigure' class='name expandable'>reconfigure</a>( <span class='pre'>instance, instanceConfig, options</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>instanceConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-resolvePlatformConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Configurator'>Ext.Configurator</span><br/><a href='source/Ext.html#Ext-Configurator-method-resolvePlatformConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Configurator-method-resolvePlatformConfig' class='name expandable'>resolvePlatformConfig</a>( <span class='pre'>instanceConfig</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method accepts an instance config object containing a platformConfig\nproperty and merges the appropriate rules f...</div><div class='long'><p>This method accepts an instance config object containing a <code>platformConfig</code>\nproperty and merges the appropriate rules from that sub-object with the root object\nto create the final config object that should be used. This is method called by\n<code><a href=\"#!/api/Ext.Configurator-method-configure\" rel=\"Ext.Configurator-method-configure\" class=\"docClass\">configure</a></code> when it receives an <code>instanceConfig</code> containing a\n<code>platformConfig</code> property.</p>\n        <p>Available since: <b>5.1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The instance config parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The new instance config object with platformConfig results applied.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});