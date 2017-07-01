$((describe("RSS Feeds",function(){it("are defined",function(){expect(allFeeds).toBeDefined(),expect(allFeeds.length).not.toBe(0)}),it("has valid URLs",function(){allFeeds.forEach(function(e){expect(e.url).toBeDefined(),expect(e.url.length).not.toBe(0),expect(e.url).toMatch(/^((http|https):\/\/)/)})}),it("has name defined",function(){allFeeds.forEach(function(e){expect(e.name).toBeDefined(),expect(e.name.length).not.toBe(0),expect(typeof e.name).toBe("string"),expect(e.name).not.toMatch(/^\s*$/g)})})}),describe("The Menu",function(){var e=$(".menu-icon-link");it("Menu hidden by default",function(){expect($("body").hasClass("menu-hidden")).toBe(!0)}),it("menu changes visibility ",function(){e.click(),expect($("body").hasClass("menu-hidden")).not.toBe(!0),e.click(),expect($("body").hasClass("menu-hidden")).toBe(!0)})}),describe("Initial Entries",function(){var e=$(".entry-link");beforeEach(function(e){loadFeed(0,function(){e()})}),it("at least a single .entry element exist",function(t){expect(e.length).toBe(0),expect($(".entry-link").length).toBeGreaterThan(0),t()})}),void describe("New Feed Selection",function(){var e,t;beforeEach(function(n){loadFeed(0,function(){e=$(".entry-link:first")[0].href,loadFeed(1,function(){t=$(".entry-link:first")[0].href,n()})})}),it("content changes",function(n){expect(e).toMatch(/^((http|https):\/\/)/),expect(t).toMatch(/^((http|https):\/\/)/),expect(e).not.toBe(t),n()})})));